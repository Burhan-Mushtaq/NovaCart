import Product from "../models/Product.js";
import Category from "../models/Category.js";
import asyncHandler from "../utils/asyncHandler.js";

import {
  uploadImage,
  uploadMultipleImages,
  deleteImage,
} from "../services/cloudinary.service.js";


export const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    slug,
    description,
    brand,
    category,
    price,
    discountPrice,
    stock,
    sku,
    images,
    thumbnail,
    colors,
    sizes,
    featured,
    bestseller,
    tags,
    seoTitle,
    seoDescription,
  } = req.body;

  if (
    !name ||
    !description ||
    !category ||
    price === undefined
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Name, description, category and price are required.",
    });
  }

  const existingCategory = await Category.findById(
    category
  );

  if (!existingCategory) {
    return res.status(404).json({
      success: false,
      message: "Category not found.",
    });
  }

  if (sku) {
    const existingSKU = await Product.findOne({
      sku,
    });

    if (existingSKU) {
      return res.status(400).json({
        success: false,
        message: "SKU already exists.",
      });
    }
  }

  if (slug) {
    const existingSlug = await Product.findOne({
      slug,
    });

    if (existingSlug) {
      return res.status(400).json({
        success: false,
        message: "Product slug already exists.",
      });
    }
  }

  const product = await Product.create({
    name,
    slug,
    description,
    brand,
    category,
    price,
    discountPrice,
    stock,
    sku,
    images,
    thumbnail,
    colors,
    sizes,
    featured,
    bestseller,
    tags,
    seoTitle,
    seoDescription,
  });

  res.status(201).json({
    success: true,
    message: "Product created successfully.",
    product,
  });
});


export const getProducts = asyncHandler(async (req, res) => {
  const {
    search,
    category,
    brand,
    minPrice,
    maxPrice,
    minRating,
    featured,
    bestseller,
    inStock,
    sort,
    page = 1,
    limit = 12,
  } = req.query;

  // Base query
  const query = {
    isActive: true,
  };

  if (search && search.trim()) {
    query.$or = [
      {
        name: {
          $regex: search.trim(),
          $options: "i",
        },
      },
      {
        description: {
          $regex: search.trim(),
          $options: "i",
        },
      },
      {
        brand: {
          $regex: search.trim(),
          $options: "i",
        },
      },
      {
        tags: {
          $in: [
            new RegExp(search.trim(), "i"),
          ],
        },
      },
    ];
  }

  if (category) {
    query.category = category;
  }

  if (brand) {
    query.brand = {
      $regex: brand,
      $options: "i",
    };
  }


  if (minPrice || maxPrice) {
    query.price = {};

    if (minPrice) {
      query.price.$gte = Number(minPrice);
    }

    if (maxPrice) {
      query.price.$lte = Number(maxPrice);
    }
  }

 

  if (minRating) {
    query.ratings = {
      $gte: Number(minRating),
    };
  }


  if (featured === "true") {
    query.featured = true;
  }


  if (bestseller === "true") {
    query.bestseller = true;
  }


  if (inStock === "true") {
    query.stock = {
      $gt: 0,
    };
  }

  

  const currentPage = Math.max(
    Number(page) || 1,
    1
  );

  const itemsPerPage = Math.min(
    Math.max(Number(limit) || 12, 1),
    100
  );

  const skip =
    (currentPage - 1) * itemsPerPage;

 

  let sortOption = {
    createdAt: -1,
  };

  switch (sort) {
    case "price_asc":
      sortOption = {
        price: 1,
      };
      break;

    case "price_desc":
      sortOption = {
        price: -1,
      };
      break;

    case "rating":
      sortOption = {
        ratings: -1,
        numReviews: -1,
      };
      break;

    case "newest":
      sortOption = {
        createdAt: -1,
      };
      break;

    case "oldest":
      sortOption = {
        createdAt: 1,
      };
      break;

    case "name_asc":
      sortOption = {
        name: 1,
      };
      break;

    case "name_desc":
      sortOption = {
        name: -1,
      };
      break;

    default:
      sortOption = {
        createdAt: -1,
      };
  }

 

  const total = await Product.countDocuments(
    query
  );

  const products = await Product.find(query)
    .populate(
      "category",
      "name slug"
    )
    .sort(sortOption)
    .skip(skip)
    .limit(itemsPerPage)
    .lean();

  const totalPages = Math.ceil(
    total / itemsPerPage
  );

  res.status(200).json({
    success: true,

    count: products.length,

    total,

    page: currentPage,

    limit: itemsPerPage,

    totalPages,

    hasNextPage:
      currentPage < totalPages,

    hasPreviousPage:
      currentPage > 1,

    products,
  });
});

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate("category", "name slug")
    .populate("reviews.user", "name avatar");

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found.",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(
    req.params.id
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found.",
    });
  }

  if (req.body.category) {
    const category = await Category.findById(
      req.body.category
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }
  }
  if (req.body.sku) {
    const existingSKU =
      await Product.findOne({
        sku: req.body.sku,
        _id: {
          $ne: product._id,
        },
      });

    if (existingSKU) {
      return res.status(400).json({
        success: false,
        message: "SKU already exists.",
      });
    }
  }

  if (req.body.slug) {
    const existingSlug =
      await Product.findOne({
        slug: req.body.slug,
        _id: {
          $ne: product._id,
        },
      });

    if (existingSlug) {
      return res.status(400).json({
        success: false,
        message: "Product slug already exists.",
      });
    }
  }

  Object.keys(req.body).forEach((key) => {
    product[key] = req.body[key];
  });

  const updatedProduct =
    await product.save();

  res.status(200).json({
    success: true,
    message:
      "Product updated successfully.",
    product: updatedProduct,
  });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(
    req.params.id
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found.",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message:
      "Product deleted successfully.",
  });
});

export const searchProducts = asyncHandler(
  async (req, res) => {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.status(400).json({
        success: false,
        message: "Search query is required.",
      });
    }

    const searchTerm = q.trim();

    const products = await Product.find({
      isActive: true,

      $or: [
        {
          name: {
            $regex: searchTerm,
            $options: "i",
          },
        },
        {
          description: {
            $regex: searchTerm,
            $options: "i",
          },
        },
        {
          brand: {
            $regex: searchTerm,
            $options: "i",
          },
        },
        {
          tags: {
            $in: [
              new RegExp(
                searchTerm,
                "i"
              ),
            ],
          },
        },
      ],
    })
      .populate(
        "category",
        "name slug"
      )
      .sort({
        ratings: -1,
        numReviews: -1,
      })
      .limit(20)
      .lean();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  }
);

export const getRelatedProducts =
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    const currentProduct =
      await Product.findById(id);

    if (!currentProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const products =
      await Product.find({
        _id: {
          $ne: currentProduct._id,
        },

        category:
          currentProduct.category,

        isActive: true,
      })
        .populate(
          "category",
          "name slug"
        )
        .sort({
          ratings: -1,
          numReviews: -1,
          createdAt: -1,
        })
        .limit(8)
        .lean();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  });

export const addReview = asyncHandler(
  async (req, res) => {
    const {
      rating,
      comment,
    } = req.body;

    if (!rating || !comment) {
      return res.status(400).json({
        success: false,
        message:
          "Rating and comment are required.",
      });
    }

    const numericRating =
      Number(rating);

    if (
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Rating must be between 1 and 5.",
      });
    }

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const alreadyReviewed =
      product.reviews.find(
        (review) =>
          review.user.toString() ===
          req.user._id.toString()
      );

    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message:
          "You have already reviewed this product.",
      });
    }

    product.reviews.push({
      user: req.user._id,
      name: req.user.name,
      rating: numericRating,
      comment: comment.trim(),
    });

    product.numReviews =
      product.reviews.length;

    const totalRating =
      product.reviews.reduce(
        (sum, review) =>
          sum + review.rating,
        0
      );

    product.ratings =
      totalRating /
      product.numReviews;

    await product.save();

    const updatedProduct =
      await Product.findById(
        product._id
      )
        .populate(
          "reviews.user",
          "name avatar"
        );

    res.status(201).json({
      success: true,
      message:
        "Review added successfully.",
      product: updatedProduct,
    });
  }
);

export const updateReview = asyncHandler(
  async (req, res) => {
    const { rating, comment } = req.body;

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const review = product.reviews.find(
      (item) =>
        item.user.toString() ===
        req.user._id.toString()
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    if (rating !== undefined) {
      const numericRating = Number(rating);

      if (
        numericRating < 1 ||
        numericRating > 5
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Rating must be between 1 and 5.",
        });
      }

      review.rating = numericRating;
    }

    if (comment !== undefined) {
      if (!comment.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Comment cannot be empty.",
        });
      }

      review.comment = comment.trim();
    }
    product.numReviews =
      product.reviews.length;

    const totalRating =
      product.reviews.reduce(
        (sum, item) =>
          sum + item.rating,
        0
      );

    product.ratings =
      product.numReviews > 0
        ? totalRating / product.numReviews
        : 0;

    await product.save();

    res.status(200).json({
      success: true,
      message:
        "Review updated successfully.",
      product,
    });
  }
);

export const deleteReview = asyncHandler(
  async (req, res) => {
    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const reviewIndex =
      product.reviews.findIndex(
        (item) =>
          item.user.toString() ===
          req.user._id.toString()
      );

    if (reviewIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Review not found.",
      });
    }

    product.reviews.splice(
      reviewIndex,
      1
    );

    product.numReviews =
      product.reviews.length;

    if (product.numReviews === 0) {
      product.ratings = 0;
    } else {
      const totalRating =
        product.reviews.reduce(
          (sum, item) =>
            sum + item.rating,
          0
        );

      product.ratings =
        totalRating /
        product.numReviews;
    }

    await product.save();

    res.status(200).json({
      success: true,
      message:
        "Review deleted successfully.",
      product,
    });
  }
);

export const uploadProductImages = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please select at least one image.",
      });
    }

    const uploadedImages =
      await uploadMultipleImages(
        req.files,
        "ecommerce/products"
      );

    product.images = [
      ...(product.images || []),
      ...uploadedImages,
    ];


    if (
      !product.thumbnail?.url &&
      uploadedImages.length > 0
    ) {
      product.thumbnail =
        uploadedImages[0];
    }

    await product.save();

    res.status(200).json({
      success: true,
      message:
        "Product images uploaded successfully.",
      images: uploadedImages,
      product,
    });
  }
);

export const deleteProductImage =
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { public_id } = req.body;

    if (!public_id) {
      return res.status(400).json({
        success: false,
        message:
          "Cloudinary public_id is required.",
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const imageExists =
      product.images?.find(
        (image) =>
          image.public_id === public_id
      );

    if (!imageExists) {
      return res.status(404).json({
        success: false,
        message:
          "Image does not belong to this product.",
      });
    }

    await deleteImage(public_id);


    product.images =
      product.images.filter(
        (image) =>
          image.public_id !== public_id
      );


    if (
      product.thumbnail?.public_id ===
      public_id
    ) {
      product.thumbnail =
        product.images.length > 0
          ? product.images[0]
          : {
              public_id: "",
              url: "",
            };
    }

    await product.save();

    res.status(200).json({
      success: true,
      message:
        "Product image deleted successfully.",
      product,
    });
  });
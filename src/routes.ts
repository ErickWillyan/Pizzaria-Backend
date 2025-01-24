import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import uploadConfig from "./config/multer";
import multer from "multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));
//User Routes

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/userInfo", isAuthenticated, new DetailUserController().handle);

//Category Routes

router.post(
  "/createCategory",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get(
  "/listCategories",
  isAuthenticated,
  new ListCategoryController().handle
);

//Products

router.post(
  "/createProduct",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/listProductByCategory",
  isAuthenticated,
  new ListByCategoryController().handle
);
export { router };

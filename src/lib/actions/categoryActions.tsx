"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
 
import Category from "../../models/CategoryModel"
import { connect } from "@/dbConfig/dbConfig"

connect();

export const createCategory = async ({ categoryName }: CreateCategoryParams) => {
  try {
 

    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error)
  }
}

export const getAllCategories = async () => {
  try {
    const categories = await Category.find();
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error)
  }
}
import { categories } from '../data/categories'
import { Category } from '../types'

export function findAll(request, response) {
  console.log('--->Find All: \n' + JSON.stringify(categories, null))
  response.end('All Categories: \n' + JSON.stringify(categories, null))
}

export function create(request, response) {
  const newCategorie = request.body
  categories[newCategorie.id] = newCategorie
  console.log(
    '--->After Post, Categories:\n' + JSON.stringify(categories, null),
  )
  response.end('Post Successfully: \n' + JSON.stringify(newCategorie, null))
}

export function findOne(requset, response) {
  const getCategorie: Category = categories[requset.params.id]

  console.log(
    '--->Find Categorie: \n' +
      JSON.stringify(categories[requset.params.id], null),
  )
  response.end(
    'Find a Categorie:\n' + JSON.stringify(categories[requset.params.id], null),
  )
}

export function update(request, response) {
  const id: number = parseInt(request.params.id)
  const updatedCategorie = request.body
  if (categories[id] != null) {
    // update data
    categories[id] = updatedCategorie

    console.log(
      '--->Update Successfully, Categories: \n' +
        JSON.stringify(categories, null),
    )

    // return
    response.end(
      'Update Successfully! \n' + JSON.stringify(updatedCategorie, null),
    )
  } else {
    response.end(
      "Doesn't Exist Categorie:\n:" + JSON.stringify(updatedCategorie, null),
    )
  }
}

export function deleteCategory(request, response) {
  const deleteCategorie = categories[request.params.id]
  delete categories[request.params.id]
  console.log(
    '--->After deletion, Categorie list:\n' + JSON.stringify(categories, null),
  )
  response.end('Deleted Categorie: \n' + JSON.stringify(deleteCategorie, null))
}

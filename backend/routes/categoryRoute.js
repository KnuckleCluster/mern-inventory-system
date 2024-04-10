import express from 'express';
import { Category } from '../models/inventoryCategories.js';


const router = express.Router();



router.post('/', async (request, response) => 
    {
        try {
            if (
                !request.body.id ||
                !request.body.title ||
                !request.body.description
            )
            {
                return response.status(400).send(
                    {
                        message: 'Send all required fields: ID, Title, Description',  
                    }
                );
            }
            const newCategory ={
                id: request.body.id,
                title: request.body.title,
                description: request.body.description,
            };

            const category = await Category.create(newCategory);
            return response.status(201).send(category);
        }    
        catch (error)
        {
            console.log(error.message);
            response.status(500).send({ message: error.message});
        }
    }
);

//route for Get all categories from database
router.get('/', async(request, response) =>
    {
        try{
            const categories = await Category.find({});

            return response.status(200).json(
                {
                count: categories.length,
                data: categories
                }
            );
        }

        catch(error)
        {
            console.log(error.message);
            response.status(500).send({message: error.message});
        }
    }
);


//route for Get all categories from database by _ID
router.get('/:id', async(request, response) =>
    {
        try{

            const {id} = request.params;
            const category = await Category.findById(id);
            return response.status(200).json(category);
        }

        catch(error){
            console.log(error.message);
            response.status(500).send({message: error.message});
        }
    }
);


//route for update a category
router.put('/:id', async (request, response) => 
    {
        try{
            if (
                !request.body.id ||
                !request.body.title ||
                !request.body.description
            )
            {
                return response.status(400).send(
                    {
                    message: 'Send all required fields: ID, Title, Description',  
                    }
                );
            }
                const { id } = request.params;
                const result = await Category.findByIdAndUpdate(id, request.body);

                if (!result)
                {
                    return response.status(404).json({message: 'Category not found'});
                }
                else{
                    return response.status(200).send({message: 'Category updated successfully'});
                }
        }

        catch(error)
        {
            console.log(error.message);
            response.status(500).send({message: error.message});
        }
    }
);


//route for delete category
router.delete('/:id', async (request, response) =>
    {
        try 
            {
                const { id } = request.params;
                const result = await Category.findByIdAndDelete(id);

                if (!result)
                    {
                        return response.status(404).json ({message: 'Category not found'});
                    }
                else
                    {
                        return response.status(200).json({message: 'Category deleted successfully'});
                    }
            }


        catch(error)
            {
                console.log(error.message);
                response.status(500).send({message: error.message});
            }
    }
);


export default router;
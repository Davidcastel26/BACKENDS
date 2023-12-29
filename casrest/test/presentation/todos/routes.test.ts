import request from 'supertest'
import { testServer } from '../test-server'
import { prisma } from '../../../src/data/postgres'


describe('Todo rout testing', () => {

    beforeAll( async() => {
        await testServer.start()
    })

    afterAll( () => {
        testServer.close()
    })

    beforeEach( async() => {
        await prisma.todo.deleteMany();
    });

    const todo1 = { text: 'Hola mundo 1' };
    const todo2 = { text: 'Hola mundo 2' };
  
    test('should return TODOs  api/todos', async() => {

        await prisma.todo.deleteMany();
        await prisma.todo.createMany({
            data: [ todo1, todo2 ]
        });

        const { body } = await request( testServer.app )
            .get('/api/todos')
            .expect(200)

        // console.log( response.body )
        expect( body ).toBeInstanceOf( Array );
        expect( body.length ).toBe(2)
        expect( body[0].text).toBe( todo1.text );
        expect( body[1].text ).toBe( todo2.text);
        expect( body[0].completedAt ).toBeNull();

    });

    test('should return a TODO api/todos/:id', async() => {

        const todo = await prisma.todo.create({data: todo1})

        const { body } = await request( testServer.app )
            .get(`/api/todos/${ todo.id }`)
            .expect(200)

        expect( body ).toEqual({
            id: todo.id,
            text: todo.text,
            completedAt: todo.completedAt
        })

    });

    test('should return a not found TODO api/todos/:id if id does not exist', async() => {

        const { body } = await request( testServer.app )
            .get(`/api/todos/1`)
            .expect(404)

        // console.log({body}) 
        expect( body ).toEqual({ error: 'message error bitch who u trying to look for?' })       

    });


    test('should return a new Todo api/todos', async() => {

        const { body } = await request( testServer.app )
            .post('/api/todos')
            .send( todo1 )
            .expect( 201 )


        expect( body ).toEqual({
            id: expect.any(String),
            text: todo1.text,
            completedAt: null,
        })
        
    })


    test('should return an error if text is not valid api/todos', async() => {

        const { body } = await request( testServer.app )
            .post('/api/todos')
            .send( {} )
            .expect( 400 )

        // console.log(body);
        
        expect( body ).toEqual({ error: 'Text property is required' })
        
    })

    test('should return an error if text is empty api/todos', async() => {

        const { body } = await request( testServer.app )
            .post('/api/todos')
            .send( {text: ''} )
            .expect( 400 )

        // console.log(body);
        
        expect( body ).toEqual({ error: 'Text property is required' })
        
    })

    test('should return an update todo api/todos/:id', async() => {

        const todo = await prisma.todo.create({ data: todo1 })

        const { body } = await request( testServer.app )
            .put(`/api/todos/${todo.id}`)
            .send({ text: "Hola mundo Update", completedAt: '2023-10-21'})
            .expect(200)

        // console.log({body})
        expect(body).toEqual({
            id: expect.any(String),
            text: 'Hola mundo Update',
            completedAt: '2023-10-21T00:00:00.000Z'
          })
    })

    // TODO: realizar la operacion con errores personalizados 
    test('should return 404 if todo not found', async() => {

        const { body } = await request( testServer.app )
            .put(`/api/todos/1`)
            .send({ text: "Hola mundo Update", completedAt: '2023-10-21'})
            .expect(404)

        // console.log({body})
        expect(body).toEqual({ error: 'message error bitch who u trying to look for?' })
    })

    test('should return an update todo only the date', async() => {

        const todo = await prisma.todo.create({ data: todo1 })

        const { body } = await request( testServer.app )
            .put(`/api/todos/${todo.id}`)
            .send({ completedAt: '2023-09-21'})
            .expect(200)

        // console.log({body})

        expect(body).toEqual({
            id: expect.any(String),
            text: todo1.text,
            completedAt: '2023-09-21T00:00:00.000Z'
          })

    })

    test('should delete todo api/todos/:id', async() => {

        const todo = await prisma.todo.create({ data: todo1 })

        const { body } = await request( testServer.app )
            .delete(`/api/todos/${todo.id}`)
            .expect(204)

        

        expect(body).toEqual({})

    })

    // TODO: cambair 
    test('should return 404 if todo do not exist api/todos/:id', async() => {

        const { body } = await request( testServer.app )
            .delete('/api/todos/1')
            .expect( 404 )

        // console.log({body})
        expect( body ).toEqual({ error: 'message error bitch who u trying to look for?' })
    })

})
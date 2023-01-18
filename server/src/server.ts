// Back-end API RESTful

import { PrismaClient } from "@prisma/client";
import cors from '@fastify/cors';
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient

app.register(cors)

/* 
    Método HTTP: Get, Post, Put, Patch, Delete
*/

app.get('/', async () => {
    const habits = await prisma.habit.findMany();

    return habits;
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running')
})
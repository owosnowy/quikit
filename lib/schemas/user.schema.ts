import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http'
import { pgTable, serial, text, timestamp, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

export const user = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    password: text('password').notNull(),
    created_at: timestamp('created_at').defaultNow().notNull()
}, (users) => {
    return {
        usernameIdx: uniqueIndex('username_idx').on(users.username),
    }
})
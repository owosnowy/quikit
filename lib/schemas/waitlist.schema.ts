import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http'
import { pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

export const user = pgTable('users', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull(),
}, (users) => {
    return {
        usernameIdx: uniqueIndex('email_idx').on(users.email),
    }
})
import { pgTable, text, serial, integer, date, json, smallint, boolean} from 'drizzle-orm/pg-core';

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    history: json('user_id'),
    feedback: text('chat_id'),
    rating: integer('created_at'),
    updatedAt: date('updated_at'),
    createdAt: date('created_at'),
    userId: text('user_id').notNull(),
    setting: text('setting'),
    suggestions: text('suggestions'),
    });

export const streaks = pgTable('streaks', {
    id: text('id').primaryKey().notNull(),
    streak: smallint('streak').default(0).notNull(),
})

export const persona = pgTable('persona', {
    id: serial('id').primaryKey().notNull(),
    scenarioAgent: text('scenario_agent'),
    gender: text('gender'),
    personality: text('personality'),
    appearence: text('appearance'),
    occupation: text('occupation'),
    age: integer('age'),
    recentExperiences: text('recent_experiences'),
    backstory: text('backstory'),
    datingStatus: text('dating_status'),
    romanticInterest: boolean('romantic_interest'),
})

export const personaChat = pgTable('persona_chat', {
    personaId: serial('persona_id').notNull(),
    chatId: serial('chat_id').notNull(),
})
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const postsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      where: { userId: ctx.session.user.id },
    });

    return posts;
  }),

  create: protectedProcedure
    .input(z.object({ content: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const createdPost = await ctx.db.post.create({
        data: { content: input.content, userId: ctx.session.user.id },
      });

      if (!createdPost) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      return createdPost;
    }),
});

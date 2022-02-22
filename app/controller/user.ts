// RESTFUL API DOCS
// https://eggjs.org/zh-cn/basics/router.html#restful-%E9%A3%8E%E6%A0%BC%E7%9A%84-url-%E5%AE%9A%E4%B9%89
import { Controller } from 'egg';
/*
 * Method	Path	Route Name	Controller.Action
  GET	/posts	posts	app.controllers.posts.index
  GET	/posts/new	new_post	app.controllers.posts.new
  GET	/posts/:id	post	app.controllers.posts.show
  GET	/posts/:id/edit	edit_post	app.controllers.posts.edit
  POST	/posts	posts	app.controllers.posts.create
  PUT	/posts/:id	post	app.controllers.posts.update
  DELETE	/posts/:id	post	app.controllers.posts.destroy
 */

export default class UserController extends Controller {

  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.user.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  async edit() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.del(id);
    ctx.status = 200;
  }
}

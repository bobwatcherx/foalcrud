import {MyApp} from '../entities/my-app.entity';
import {
   Context,
  Get,
  Post,
  Delete,
   HttpResponseOK,
   HttpResponseNotFound
  } from '@foal/core';
export class ApiController {
  @Post("/add")//INI BEBAS BUAT URL API NYA
async addpost(ctx:Context){
  const myapp = new MyApp()
  myapp.nama = ctx.request.body.nama,
  myapp.alamat = ctx.request.body.alamat
  const savedata = await myapp.save()
  if(savedata){
    return new HttpResponseOK({"msg":"tersimpan","data":myapp})

  }
  else{
    return new HttpResponseNotFound()
  }

}
  // SEKARANG KITA TEST TAMBAH DATA
  @Get('/')//SEKARANG MEMUNCULKAN SEMUA DATA YANG TADI DI INPUT
async  index(ctx: Context) {
  const allpost = await MyApp.find()
  return new HttpResponseOK(allpost)
  }
  @Delete("/del/:id")
  // SEKARANG KITA HAPUS SALAH SATU DATA DARI API YANG TADI
  // DI INPUT
async deleteid(ctx.Context){
  const _id = await MyApp.findOne({id:ctx.request.params.id})
  if(!_id){
      return new HttpResponseNotFound({
        data:"tidak ditemukan"
      })
  }
  else{
    await _id.remove()
    return new HttpResponseOK({
      status:"success",
      data:_id
    })
  }
}
}

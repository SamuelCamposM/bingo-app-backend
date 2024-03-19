import { Schema, model } from "mongoose";
const PageSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    icono: {
      type: String,
      required: true,
    },
    subCategorias: [
      {
        type: Schema.Types.ObjectId,
        ref: "Page",
      },
    ],
    subSubCategorias: [
      {
        type: Schema.Types.ObjectId,
        ref: "Page",
      },
    ],
    orden: {
      type: Number,
      required: true,
    },
    permisos: {
      default: {
        editar: [],
        crear: [],
        eliminar: [],
        ver: [],
        todaLaData: [],
        reporte: [],
      },
    },
  },
  { timestamps: true }
);

PageSchema.method("toJSON", function () {
  const { __v, ...rest } = this.toObject();
  return { ...rest, uid: rest._id };
});

export const PageModel = model("Page", PageSchema);

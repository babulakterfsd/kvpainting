import { model, models, Schema } from 'mongoose';
import validator from 'validator';

const KVPaintingOrderSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    address: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const KVPainting_Orders =
  models.Kvpainting_orders || model('Kvpainting_orders', KVPaintingOrderSchema);
export default KVPainting_Orders;

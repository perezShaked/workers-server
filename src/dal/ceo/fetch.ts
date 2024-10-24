import { db } from '../../config/db';
import { CeoSchema } from '../../schemas';
import { GET_CEO } from '../../services';
import { Ceo } from '../../types';

export const fetchCEO = () => {
  return new Promise<Ceo>((resolve, reject) => {
    db.query(GET_CEO, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parseResult = CeoSchema.safeParse(result.rows[0]);
        if (parseResult.success) {
          resolve(parseResult.data);
        } else {
          reject(parseResult.error);
        }
      }
    });
  });
};

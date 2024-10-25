import { DELETE_EMPLOYEE_BY_ID } from '../../services';
import { db } from '../../config/db';

export const deleteEmployee = (employee_id: number) => {
  return new Promise((resolve, reject) => {
    db.query(DELETE_EMPLOYEE_BY_ID, [employee_id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

/* export const employees = (employee_id: number):boolean => {
  //אם אין לו אז צריך לבדוק אם הוא לבד בצוות
}

export const isAloneInTheTeam = (employee_id: number):boolean => {
  //אם הוא לבד בצוות אז אי אפשר לפטר או לקדם אותו
}
 */

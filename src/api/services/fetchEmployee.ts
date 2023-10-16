import { employeeSvc } from "..";
import { Employee } from "../../model/employee";

export const fetchEmployee = async () => {
  try {
    const result = await employeeSvc.get<void, { data: Employee[] }>(
      "/employee?noofRecords=50"
    );

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

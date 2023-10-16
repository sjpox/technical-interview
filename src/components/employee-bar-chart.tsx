import { useQuery } from "react-query";
import { fetchEmployee } from "../api/services/fetchEmployee";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useMemo } from "react";
import { Employee } from "../model/employee";

export default function EmployeeBarChart() {
  const { data: employeeData } = useQuery({
    queryFn: fetchEmployee,
    queryKey: "fetchEmployee",
    refetchOnWindowFocus: false,
  });

  const mappedEmployee = useMemo(() => {
    const filterEmployee = employeeData?.map((value: Employee) => {
      return `${value.firstName} ${value.lastName}`;
    });
    return filterEmployee;
  }, [employeeData]);

  const mappedSalary = useMemo(() => {
    const filterSalary = employeeData?.map((value: Employee) => {
      return value.salary;
    });
    return filterSalary;
  }, [employeeData]);

  const labels = mappedEmployee;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Employee Salary",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: mappedSalary,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

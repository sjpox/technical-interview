import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useMemo } from "react";
import { Product } from "../model/product";
import { fetchProducts } from "../api/services/fetchProducts";

export default function ProductLineChart() {
  const { data: productData } = useQuery({
    queryFn: fetchProducts,
    queryKey: "fetchProducts",
    refetchOnWindowFocus: false,
  });

  const mappedProductName = useMemo(() => {
    const filterSalary = productData?.map((value: Product) => {
      return value.title;
    });
    return filterSalary;
  }, [productData]);

  const mappedSalary = useMemo(() => {
    const filterPrice = productData?.map((value: Product) => {
      return value.price;
    });
    return filterPrice;
  }, [productData]);

  const data = {
    labels: mappedProductName,
    datasets: [
      {
        label: "Employee Salary",
        data: mappedSalary,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

import db from "../config/config";

const countProductLine = async () => {
  try {
    const [res] = await db.query(
      "SELECT c.customerNumber, COUNT(p.productline) AS TotalProductLineCount FROM customers c INNER JOIN orders o ON c.customerNumber = o.customerNumber INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber INNER JOIN products p ON od.productCode = p.productCode WHERE p.productline = 'Classic Cars' GROUP BY c.customerNumber HAVING TotalProductLineCount > 23"
    );
    return res;
  } catch (error) {
    return error;
  }
};

export default {
  countProductLine,
};

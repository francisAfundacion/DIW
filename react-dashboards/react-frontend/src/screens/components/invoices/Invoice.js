import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Invoice = (props) => {
  const params = useParams(); // Usaremos esto enseguida
  useEffect (() => {
    document.title = "Factura_" + params.invoiceId
  })
  return (
    <div data-cy='issue9body'>
      <h4 data-cy='invoiceNumberHeader'>
        Factura Nº{params.invoiceId}
      </h4>
    </div>
  )

}
export default Invoice
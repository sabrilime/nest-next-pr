import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Grid from '@mui/material/Grid';
import { getProductImage } from "../product-image";
import getProduct from "./get-product";

interface SingleProductProps {
  params: { productId: string };
}

export default async function SingleProduct({ params }: SingleProductProps) {
  const product = await getProduct(+params.productId);

  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      {product.imageExists && (
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            className="w-full sm:w-3/4 h-auto"
            sizes="100vw"
            alt="Picture of the product"
          />
        </Grid>
      )}
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack gap={3}>
          <Typography variant="h2">{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
"use client"; // this is lowest one line code, dont use everywhere its dangerous

import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  return <h1>Single Product {id}</h1>;
}

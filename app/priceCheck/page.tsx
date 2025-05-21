"use client";
import { useState, useEffect } from "react";

const PriceCheck = () => {
  return (
    <div>
      <h1>PriceCheck</h1>
      <p>
        Search for an item, it'll grab the last N transactions and determine the
        Mode (most reoocurring range). Find the Delta of the items if they're
        within.
      </p>
    </div>
  );
};

export default PriceCheck;

/*************************
 * Algorithm
 * ***********************
 * Determine Length
 * Determine Range (Max-Min)
 * Determine Range Length
 *
 * Sort Numbers Lowest to Highest
 *
 * Max 5,000,000
 * Min 4,000,000
 * Range - 1,000,000
 * Range Length - 7
 * Samples - 50
 *
 *
 *
 */

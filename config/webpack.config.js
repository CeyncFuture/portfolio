/**
 * author Thilina Pahalagedara
 * created on 10-07-2024-15h-20m
 * github: https://github.com/Pahalagedara
 * copyright 2024
 */

import path from "path";
import colors from "../src/assets/styles/colors"

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: Object.keys(colors)
                .map((key) => `$${key}: ${colors[key]};`)
                .join("\n"),
            },
          },
        ],
      },
    ],
  },
};

group(
  concat([
    "(",
    indent(
      options.tabWidth,
      concat([line, join(concat([",", line]), printed)])
    ),
    options.trailingCommas ? "," : "",
    line,
    ")"
  ]),
  {shouldBreak: true}
)

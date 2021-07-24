import os
import sys

# This scripts automates the creation of boilerplate code for react components.
# Example : python3 make_component.py MyComponent
# Example with two arguments : python3 make_component MyComponent components/myfolder

dirName = 'src/components/' + sys.argv[1]
if len(sys.argv) > 2:
    dirName = f"src/{sys.argv[2]}/{sys.argv[1]}"

os.mkdir(dirName)

component = open(dirName + "/" + sys.argv[1].lower() + ".component.tsx", "x")
scss = open(dirName + "/" + sys.argv[1].lower() + ".module.scss", "x")

component.write("import React from 'react';\n")
component.write("import styles from './{fname}.module.scss';\n\n".format(fname = sys.argv[1].lower()))
component.write("export default function {fname}() {{\n".format(fname = sys.argv[1]))
component.write("    return(\n")
component.write("        <div/>\n")
component.write("    )\n")
component.write("}")
scss.write("@import 'src/main.scss';")

component.close()
scss.close()

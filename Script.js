{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let table = document.querySelector("table");\
\
table.addEventListener("click", function(event) \{\
  if (event.target.tagName == "TD") \{\
    let td = event.target;\
    if (td.classList.contains("completed")) \{\
      td.classList.remove("completed");\
    \} else \{\
      td.classList.add("completed");\
      td.classList.remove("failed");\
    \}\
  \}\
\});\
}
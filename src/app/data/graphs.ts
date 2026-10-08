import { GraphSpec } from '../models/graph-spec';

export interface GraphEntry {
  topic: string;
  spec: GraphSpec;
}

/** Graphs shown in the viewer, in navigation order (index 0 is shown first). */
export const GRAPHS: GraphEntry[] = [
  {
    topic: 'Algebra',
    spec: {
      "expressions": [
        {"id": "lhs", "latex": "y=3x+5", "color": "#2d70b3"},
        {"id": "rhs", "latex": "y=20", "color": "#c74440"},
        {"id": "sol", "latex": "(5,20)", "label": "x = 5", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -3, "right": 10, "bottom": -5, "top": 30}
    },
  },
  {
    topic: 'Linear equations in two variables',
    spec: {
      "expressions": [
        {"id": "line", "latex": "2x+3y=12", "color": "#2d70b3"},
        {"id": "xint", "latex": "(6,0)", "label": "x-intercept (6, 0)", "showLabel": true, "color": "#c74440"},
        {"id": "yint", "latex": "(0,4)", "label": "y-intercept (0, 4)", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -4, "right": 9, "bottom": -3, "top": 7}
    },
  },
  {
    topic: 'Linear functions',
    spec: {
      "expressions": [
        {"id": "f", "latex": "y=2x-1", "color": "#2d70b3"},
        {"id": "a", "latex": "(1,1)", "label": "(1, 1)", "showLabel": true, "color": "#c74440"},
        {"id": "b", "latex": "(3,5)", "label": "(3, 5)", "showLabel": true, "color": "#c74440"},
        {"id": "yi", "latex": "(0,-1)", "label": "y-intercept (0, -1)", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -4, "right": 8, "bottom": -4, "top": 8}
    },
  },
  {
    topic: 'Systems of two linear equations',
    spec: {
      "expressions": [
        {"id": "l1", "latex": "y=2x+1", "color": "#2d70b3"},
        {"id": "l2", "latex": "y=-x+7", "color": "#c74440"},
        {"id": "sol", "latex": "(2,5)", "label": "Solution (2, 5)", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -3, "right": 8, "bottom": -3, "top": 10}
    },
  },
  {
    topic: 'Linear inequalities',
    spec: {
      "expressions": [
        {"id": "i1", "latex": "y>2x-1", "color": "#2d70b3"},
        {"id": "i2", "latex": "y\\le-x+5", "color": "#c74440"},
        {"id": "corner", "latex": "(2,3)", "label": "Boundary intersection (2, 3)", "showLabel": true, "color": "#000000"},
        {"id": "test", "latex": "(1,2)", "label": "Solution (1, 2)", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -5, "right": 8, "bottom": -5, "top": 8}
    },
  },
  {
    topic: 'Equivalent expressions',
    spec: {
      "expressions": [
        {"id": "e1", "latex": "y=\\left(x+2\\right)^2", "color": "#2d70b3"},
        {"id": "e2", "latex": "y=x^2+4x+4", "color": "#c74440", "lineStyle": "DASHED"}
      ],
      "viewport": {"left": -7, "right": 4, "bottom": -2, "top": 14}
    },
  },
  {
    topic: 'Nonlinear equations in one variable',
    spec: {
      "expressions": [
        {"id": "q", "latex": "y=x^2-5x+6", "color": "#2d70b3"},
        {"id": "r1", "latex": "(2,0)", "label": "x = 2", "showLabel": true, "color": "#c74440"},
        {"id": "r2", "latex": "(3,0)", "label": "x = 3", "showLabel": true, "color": "#c74440"}
      ],
      "viewport": {"left": -2, "right": 6, "bottom": -3, "top": 8}
    },
  },
  {
    topic: 'Systems of nonlinear equations',
    spec: {
      "expressions": [
        {"id": "par", "latex": "y=x^2", "color": "#2d70b3"},
        {"id": "lin", "latex": "y=x+2", "color": "#c74440"},
        {"id": "p1", "latex": "(-1,1)", "label": "(-1, 1)", "showLabel": true, "color": "#388c46"},
        {"id": "p2", "latex": "(2,4)", "label": "(2, 4)", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -4, "right": 5, "bottom": -2, "top": 9}
    },
  },
  {
    topic: 'Systems of nonlinear equations',
    spec: {
      "expressions": [
        {"id": "par", "latex": "y=x^2", "color": "#2d70b3"},
        {"id": "lin", "latex": "y=x+2", "color": "#c74440"},
        {"id": "p1", "latex": "(-1,1)", "label": "(-1, 1)", "showLabel": true, "color": "#388c46"},
        {"id": "p2", "latex": "(2,4)", "label": "(2, 4)", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -4, "right": 5, "bottom": -2, "top": 9}
    },
  },
  {
    topic: 'Nonlinear functions (exponential)',
    spec: {
      "expressions": [
        {"id": "exp", "latex": "y=2\\cdot3^x", "color": "#2d70b3"},
        {"id": "p0", "latex": "(0,2)", "label": "(0, 2)", "showLabel": true, "color": "#c74440"},
        {"id": "p1", "latex": "(1,6)", "label": "(1, 6)", "showLabel": true, "color": "#c74440"},
        {"id": "p2", "latex": "(2,18)", "label": "(2, 18)", "showLabel": true, "color": "#c74440"}
      ],
      "viewport": {"left": -3, "right": 4, "bottom": -5, "top": 40}
    },
  },
  {
    topic: 'Ratios, rates, and proportional relationships',
    spec: {
      "expressions": [
        {"id": "rate", "latex": "y=60x", "color": "#2d70b3"},
        {"id": "p1", "latex": "(1,60)", "label": "1 hr, 60 mi", "showLabel": true, "color": "#c74440"},
        {"id": "p2", "latex": "(2,120)", "label": "2 hr, 120 mi", "showLabel": true, "color": "#c74440"},
        {"id": "p3", "latex": "(3,180)", "label": "3 hr, 180 mi", "showLabel": true, "color": "#c74440"}
      ],
      "viewport": {"left": -1, "right": 5, "bottom": -20, "top": 250}
    },
  },
  {
    topic: 'Percentages',
    spec: {
      "expressions": [
        {"id": "orig", "latex": "y=x", "color": "#888888", "lineStyle": "DASHED"},
        {"id": "sale", "latex": "y=0.8x", "color": "#2d70b3"},
        {"id": "pt", "latex": "(50,40)", "label": "$50 becomes $40", "showLabel": true, "color": "#c74440"}
      ],
      "viewport": {"left": -10, "right": 120, "bottom": -10, "top": 120}
    },
  },
  {
    topic: 'One-variable data (center and spread)',
    spec: {
      "expressions": [
        {"id": "data", "latex": "D=\\left[2,3,3,5,7,8,9\\right]"},
        {"id": "mean", "latex": "M=\\operatorname{mean}\\left(D\\right)"},
        {"id": "median", "latex": "N=\\operatorname{median}\\left(D\\right)"},
        {"id": "box", "latex": "\\operatorname{boxplot}\\left(D\\right)", "color": "#2d70b3"}
      ],
      "viewport": {"left": -1, "right": 11, "bottom": -3, "top": 5}
    },
  },
  {
    topic: 'Two-variable data (scatterplot and line of best fit)',
    spec: {
      "expressions": [
        {"id": "tbl", "type": "table", "columns": [
          {"latex": "x_1", "values": ["1","2","3","4","5","6"]},
          {"latex": "y_1", "values": ["3","5","6","8","10","11"], "color": "#c74440"}
        ]},
        {"id": "reg", "latex": "y_1\\sim mx_1+b", "color": "#2d70b3"}
      ],
      "viewport": {"left": -1, "right": 8, "bottom": -2, "top": 14}
    },
  },
  {
    topic: 'Two-variable data (scatterplot and line of best fit)',
    spec: {
      "expressions": [
        {"id": "tbl", "type": "table", "columns": [
          {"latex": "x_1", "values": ["1","2","3","4","5","6"]},
          {"latex": "y_1", "values": ["3","5","6","8","10","11"], "color": "#c74440"}
        ]},
        {"id": "reg", "latex": "y_1\\sim mx_1+b", "color": "#2d70b3"}
      ],
      "viewport": {"left": -1, "right": 8, "bottom": -2, "top": 14}
    },
  },
  {
    topic: 'Probability',
    spec: {
      "expressions": [
        {"id": "red", "latex": "0.6<x<1.4\\left\\{0<y<12\\right\\}", "color": "#c74440"},
        {"id": "blue", "latex": "1.6<x<2.4\\left\\{0<y<10\\right\\}", "color": "#2d70b3"},
        {"id": "green", "latex": "2.6<x<3.4\\left\\{0<y<8\\right\\}", "color": "#388c46"},
        {"id": "lr", "latex": "(1,12)", "label": "Red: 12", "showLabel": true, "pointOpacity": 0},
        {"id": "lb", "latex": "(2,10)", "label": "Blue: 10", "showLabel": true, "pointOpacity": 0},
        {"id": "lg", "latex": "(3,8)", "label": "Green: 8", "showLabel": true, "pointOpacity": 0}
      ],
      "viewport": {"left": -1, "right": 5, "bottom": -2, "top": 15}
    },
  },
  {
    topic: 'Inference from sample statistics',
    spec: {
      "expressions": [
        {"id": "range", "latex": "y=0\\left\\{0.48\\le x\\le0.56\\right\\}", "color": "#2d70b3", "lineWidth": 6},
        {"id": "lo", "latex": "(0.48,0)", "label": "48%", "showLabel": true, "color": "#c74440"},
        {"id": "est", "latex": "(0.52,0)", "label": "Sample 52%", "showLabel": true, "color": "#388c46"},
        {"id": "hi", "latex": "(0.56,0)", "label": "56%", "showLabel": true, "color": "#c74440"}
      ],
      "viewport": {"left": 0.4, "right": 0.64, "bottom": -0.05, "top": 0.1}
    },
  },
  {
    topic: 'Area and volume (area example)',
    spec: {
      "expressions": [
        {"id": "tri", "latex": "\\operatorname{polygon}\\left(\\left(0,0\\right),\\left(6,0\\right),\\left(0,4\\right)\\right)", "color": "#2d70b3"},
        {"id": "base", "latex": "(3,0)", "label": "base = 6", "showLabel": true, "pointOpacity": 0},
        {"id": "height", "latex": "(0,2)", "label": "height = 4", "showLabel": true, "pointOpacity": 0}
      ],
      "viewport": {"left": -2, "right": 9, "bottom": -2, "top": 7}
    },
  },
  {
    topic: 'Lines, angles, and triangles',
    spec: {
      "expressions": [
        {"id": "l1", "latex": "y=2x+1", "color": "#2d70b3"},
        {"id": "l2", "latex": "y=-\\frac{1}{2}x+6", "color": "#c74440"},
        {"id": "meet", "latex": "(2,5)", "label": "Perpendicular at (2, 5)", "showLabel": true, "color": "#388c46"}
      ],
      "viewport": {"left": -6, "right": 10, "bottom": -4, "top": 10}
    },
  },
  {
    topic: 'Right triangles and trigonometry',
    spec: {
      "expressions": [
        {"id": "tri", "latex": "\\operatorname{polygon}\\left(\\left(0,0\\right),\\left(4,0\\right),\\left(4,3\\right)\\right)", "color": "#2d70b3"},
        {"id": "A", "latex": "(0,0)", "label": "θ", "showLabel": true, "color": "#c74440"},
        {"id": "adj", "latex": "(2,0)", "label": "adjacent = 4", "showLabel": true, "pointOpacity": 0},
        {"id": "opp", "latex": "(4,1.5)", "label": "opposite = 3", "showLabel": true, "pointOpacity": 0},
        {"id": "hyp", "latex": "(2,1.5)", "label": "hypotenuse = 5", "showLabel": true, "pointOpacity": 0}
      ],
      "viewport": {"left": -2, "right": 8, "bottom": -2, "top": 6}
    },
  },
  {
    topic: 'Circles',
    spec: {
      "expressions": [
        {"id": "circle", "latex": "\\left(x-2\\right)^2+\\left(y+1\\right)^2=16", "color": "#2d70b3"},
        {"id": "center", "latex": "(2,-1)", "label": "Center (2, -1)", "showLabel": true, "color": "#c74440"},
        {"id": "edge", "latex": "(6,-1)", "label": "radius = 4", "showLabel": true, "color": "#388c46"},
        {"id": "radius", "latex": "y=-1\\left\\{2\\le x\\le6\\right\\}", "color": "#388c46", "lineStyle": "DASHED"}
      ],
      "viewport": {"left": -5, "right": 9, "bottom": -7, "top": 7}
    },
  },
];

---
title: Beginning an Online Machine Learning Course
date: 2020-11-03
featuredImage: ../images/gradient_descent_graph.png 
---

I've been interested in machine learning (ML) for a while. I've read a few
blog posts about <abbr title="machine learning">ML</abbr>, but I never considered
studying it or applying it to my work until now.
I finally decided to enroll in [Coursera's free machine learning course](https://www.coursera.org/learn/machine-learning?) last week.

The first week covered the fundamentals of <abbr title="machine learning">ML</abbr>, including
linear regression and gradient descent. It also included a review of linear algebra, specifically matrices and vectors.

Linear regression is method of modeling a function to predict an output given one or more inputs.
If you were to plot a set of inputs (x) and outputs (y) as points on a two-dimensional plane, the linear regression function would be the line that passes through, or closest to, most of the points. Once this function is determined, you can more accurately predict the result of any input.

Gradient descent is an algorithm used for finding the optimal linear
regression function. The algorithm is used to find the function that outputs the minimal average difference between predicted results and actual results. To illustrate this concept, the course uses the image of a landscape with hills and valleys. The aim of the gradient descent algorithm is find the closest, lowest valley from a certain point. To do this you would look around and take a step in the direction that decreases your altitude the fastest. By following this process, you gradually would reach the valley closest to where you started.

Linear regression and gradient descent apply to machine learning as a way for a computer to develop an optimal function given a hypothesis (starting function) and training set (data). Linear regression gives the computer a basis for analysis and performance, while gradient descent is used as the learning process from the training set.

This week will introduce multivariate (more than one input parameter) linear
regressions. This seems a bit more challenging than simple univariate linear
regressions, but I'm looking forward to learning more, and getting into writing code.

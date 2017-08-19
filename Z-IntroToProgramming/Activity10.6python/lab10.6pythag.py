import math

sideA = input("What is the length of SIDE A?")
sideB = input("What is the length of SIDE B?")

A = (sideA * sideA)
B = (sideB * sideB)
C = (A + B)
sideC = math.sqrt(C)
print "The calculations of {} and {} are equal to {}.".format(A, B, A + B)

print "...Therfore, the length of SideC is {}".format(sideC)

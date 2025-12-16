import numpy as np


marks=np.random.randint(35,101,size=(5,6)) #rows->students,  columns->subjects

average_student=marks.mean(axis=1)
print(average_student)

average_subject=marks.mean(axis=0)
print(average_subject)

#finding topper

total=marks.sum(axis=1)
topper=np.argmax(total)
topper_marks=total.max()
print ("Topper is :",topper,", With marks :",topper_marks)

#4
marks=marks.astype(float)
marks[marks<40]=np.nan
print(marks)
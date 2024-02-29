from django.db import models

# Create your models here.

class imageinfo(models.Model):
    image_title = models.CharField(max_length=50, default=None)
    number_of_images = models.IntegerField(default=2)
    input_image = models.ImageField(upload_to="inputimages", height_field=None, width_field=None, max_length=None)

    def __str__(self):
        return self.image_title    

class zipinfo(models.Model):
    image_title = models.CharField(max_length=50, default=None)
    number_of_images = models.IntegerField(default=2)
    input_zip = models.FileField(upload_to="inputzip")
    def __str__(self):
        return self.image_title 
    
class multiImg(models.Model):
    image_title = models.CharField(max_length=50, default=None)
    number_of_folders = models.IntegerField(default=2)
    input_image = models.ImageField(upload_to="multipleImage")
    def __str__(self):
        return self.image_title 
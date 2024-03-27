from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime
# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    middle_name = models.CharField(max_length = 50, blank = True, null = True)
    image = models.ImageField(default = "default.jpg", upload_to = "profile_images")
    birthdate = models.DateField()
    address = models.TextField(null = True, blank = True)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

class TeamGroup(models.Model):
    name = models.CharField(max_length = 200)
    created = models.DateTimeField(default = datetime.datetime.now)
    leader = models.ForeignKey(User, on_delete = models.CASCADE)

class Project(models.Model):
    team_group = models.ForeignKey(TeamGroup, on_delete = models.CASCADE)
    name = models.TextField()
    created = models.DateTimeField(default = datetime.datetime.now)
    deadline = models.DateTimeField(default = None, null = True, blank = True)

class Task(models.Model):
    project = models.ForeignKey(Project, on_delete = models.CASCADE)
    created = models.DateTimeField(default = datetime.datetime.now)
    deadline = models.DateTimeField(default = None, null = True, blank = True)

class TaskDesignation(models.Model):
    task = models.ForeignKey(Task, on_delete = models.CASCADE)
    designator = models.ForeignKey(User, on_delete = models.CASCADE, related_name  = "designator")
    asignee = models.ForeignKey(User, on_delete = models.CASCADE, related_name = "asignee")

    class Meta:
        unique_together = ('designator', 'asignee')
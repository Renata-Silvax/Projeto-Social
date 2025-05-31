from django.db import models

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key = True)
    nome = models.TextField(max_length = 255)
    email = models.TextField(max_length=255)
    sexo = models.CharField(max_length=1)
    dn = models.TextField(max_length=255)

#nome, email, sexo dn
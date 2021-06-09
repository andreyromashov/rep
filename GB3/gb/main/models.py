from django.db import models
from django.urls import reverse


class New(models.Model):
    title = models.CharField(max_length=255, verbose_name="Заголовок")
    content = models.TextField(blank=True, verbose_name="Текст статьи")
    photo = models.ImageField(upload_to="photos/%Y/%m/%d/", verbose_name="Фото")
    time_create = models.DateTimeField(auto_now_add=True, verbose_name="Время создания")
    time_update = models.DateTimeField(auto_now=True, verbose_name="Время изменения")
    is_published = models.BooleanField(default=True, verbose_name="Публикация")

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_id': self.pk})

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новости'
        verbose_name_plural = 'Новости'
        ordering = ['-time_create', 'title']


class Reviews(models.Model):
    name = models.CharField(max_length=255, verbose_name="Имя")
    doctor = models.CharField(max_length=255, verbose_name="док")
    content = models.TextField(blank=True, verbose_name="Текст")
    time_create = models.DateTimeField(auto_now_add=True, verbose_name="Время создания")
    is_published = models.BooleanField(default=True, verbose_name="отображать")
    cat = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name


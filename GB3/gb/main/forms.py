from django import forms
from .models import *


class AddPostForm(forms.Form):
    name = forms.CharField(max_length=50, label="От кого")
    doctor = forms.CharField(max_length=50, label="Кому")
    cat = forms.ModelChoiceField(queryset=Category.objects.all(), label="Отзыв", empty_label="Категория не выбрана",)
    content = forms.CharField(widget=forms.Textarea(attrs={'cols': 60, 'rows': 10}), label="Отзыв")
    is_published = forms.BooleanField(label="Подтвердить отправку")





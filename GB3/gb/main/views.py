
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView

from .forms import *
from .models import *

def index(request):
    posts=New.objects.all()
    return render(request, 'main/index.html', {'posts': posts})

def about(request):
    return render(request, 'main/about.html')

def administration(request):
    return render(request, 'main/administration.html')

def berezhlivaya_poliklinika(request):
    return render(request, 'main/berezhlivaya_poliklinika.html')

def callback(request):
    return render(request, 'main/callback.html')

def clinicheskie_issledovaniya(request):
    return render(request, 'main/clinicheskie_issledovaniya.html')

def contacts(request):
    return render(request, 'main/contacts.html')


def license(request):
    return render(request, 'main/license.html')

def order(request):
    return render(request, 'main/order.html')

def otdel_klin_far(request):
    return render(request, 'main/otdel_klin_far.html')

def pravila_vnutrennego_rasporyadka_dly_potrebitelei(request):
    return render(request, 'main/pravila_vnutrennego_rasporyadka_dly_potrebitelei.html')

def history(request):
    return render(request, 'main/history.html')

def rezhim_raboti(request):
    return render(request, 'main/rezhim_raboti.html')

def regular_gallery(request):
    return render(request, 'main/regular_gallery.html')

def ocenit_rab(request):
    return render(request, 'main/ocenit_rab.html')

def inf_o_zacup(request):
    return render(request, 'main/inf_o_zacup.html')

def o_nas(request):
    return render(request, 'main/o_nas.html')

def svedenia_rezistracii(request):
    return render(request, 'main/svedenia_rezistracii.html')

def otchet_ucher(request):
    return render(request, 'main/otchet_ucher.html')

def otchet_o_povedenii(request):
    return render(request, 'main/otchet_o_povedenii.html')

def otchet_o_rezultatah(request):
    return render(request, 'main/otchet_o_rezultatah.html')

def zapis_na_priem(request):
    return render(request, 'main/zapis_na_priem.html')

def info_o_disponserizacii(request):
    return render(request, 'main/info_o_disponserizacii.html')

def school_health(request):
    return render(request, 'main/school_health.html')

def inf_o_oms(request):
    return render(request, 'main/inf_o_oms.html')

def uslovia_okazania_mp(request):
    return render(request, 'main/uslovia_okazania_mp.html')

def contacts(request):
    return render(request, 'main/contacts.html')

def lecarstvenoe_obespechenie(request):
    return render(request, 'main/lecarstvenoe_obespechenie.html')

def kategorii_gragdan(request):
    return render(request, 'main/kategorii_gragdan.html')

def poraydok_lekarstv(request):
    return render(request, 'main/poraydok_lekarstv.html')

def spisok_aptek(request):
    return render(request, 'main/spisok_aptek.html')

def med_ekspertiza(request):
    return render(request, 'main/med_ekspertiza.html')

def pocazatel_kachestva(request):
    return render(request, 'main/pocazatel_kachestva.html')

def tellefon_links(request):
    return render(request, 'main/tellefon_links.html')

def pamitka_o_teroristah(request):
    return render(request, 'main/pamitka_o_teroristah.html')

def uchastok(request):
    return render(request, 'main/uchastok.html')

def podgotovka_k_diagnosticheskim_issledovaniyam(request):
    return render(request, 'main/podgotovka_k_diagnosticheskim_issledovaniyam.html')

def ocenit_rab(request):
    return render(request, 'main/ocenit_rab.html')
def ocenit_rab(request):
    return render(request, 'main/ocenit_rab.html')
def ocenit_rab(request):
    return render(request, 'main/ocenit_rab.html')
def ocenit_rab(request):
    return render(request, 'main/ocenit_rab.html')
def ocenit_rab(request):
    return render(request, 'main/ocenit_rab.html')



def show_post(request, post_id):
    return HttpResponse(f"Отображение статьи с id = {post_id}")


def show_post(request, post_id):
    post = get_object_or_404(New, pk=post_id)

    context = {
        'post': post,
        'title': post.title,
    }

    return render(request, 'main/post.html', context=context)

def otziv(request):
    if request.method == 'POST':
        form = AddPostForm(request.POST)
        if form.is_valid():
            # print(form.cleaned_data)
            try:
                Reviews.objects.create(**form.cleaned_data)
                return redirect('otziv.html')
            except:
                form.add_error(None, 'Ошибка добавления поста')
    else:
        form = AddPostForm()
    return render(request, 'main/otziv.html', {'form': form})

"""
class ReviewView(ListView):
    model = Reviews
    template_name = 'main/otziv.html'
    context_object_name = 'reviewss'
    """
from . import serializers
from rest_framework import generics,pagination,viewsets
from . import models
# Create your views here.
#vendor
class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer

class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer 

#product
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    #pagination_class = pagination.LimitOffsetPagination 
    pagination_class = pagination.PageNumberPagination

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer    

#customer
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer 

#Order
class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer 

class OrderDetail(generics.ListAPIView):
    #queryset = models.OrderItem.objects.all()
    serializer_class = serializers.OrderDetailSerializer
 
    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items=models.OrderItem.objects.filter(order=order)
        return order_items
    
class CustomerAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomerAddressSerializer
    queryset=models.CustomerAddress.objects.all()

class ProductRatingViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProductRatingSerializer
    queryset = models.ProductRating.objects.all()

#Category List API
class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategoryDetailSerializer 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CustomUser, UserSession
import bcrypt, json, secrets

@csrf_exempt
def better_login(request):
	if request.method != 'POST':
		return JsonResponse({'error':'Unsupported HTTP method'}, status=405)
	body = json.loads(request.body)
	username = body.get('username', None)
	if username == None:
		return JsonResponse({'error': 'Missing username in request body'}, status=400)
	try:
		user = CustomUser.objects.get(username=username)
	except CustomUser.DoesNotExist:
		return JsonResponse({'error': 'Username does not exist'}, status=404)
	password = body.get('password', None)
	if password == None:
		return JsonResponse({'error': 'Missing password in request body'}, status=400)
	if bcrypt.checkpw(password.encode('utf8'), user.encrypted_password.encode('utf8')):
		new_session = UserSession()
		new_session.user = user
		new_session.token = secrets.token_hex(10)
		new_session.save()
		response = JsonResponse({'created':'True', 'session_id': new_session.id}, status=201)
		# https://docs.djangoproject.com/en/5.1/ref/request-response/#django.http.HttpResponse.set_cookie
		response.set_cookie(key="SESSION_TOKEN", value=new_session.token)
		return response
	else:
		return JsonResponse({'error': 'Password is invalid'}, status=401)

@csrf_exempt
def best_login(request):
	if request.method != 'POST':
		return JsonResponse({'error':'Unsupported HTTP method'}, status=405)
	body = json.loads(request.body)
	username = body.get('username', None)
	if username == None:
		return JsonResponse({'error': 'Missing username in request body'}, status=400)
	try:
		user = CustomUser.objects.get(username=username)
	except CustomUser.DoesNotExist:
		return JsonResponse({'error': 'Username does not exist'}, status=404)
	password = body.get('password', None)
	if password == None:
		return JsonResponse({'error': 'Missing password in request body'}, status=400)
	if bcrypt.checkpw(password.encode('utf8'), user.encrypted_password.encode('utf8')):
		new_session = UserSession()
		new_session.user = user
		new_session.token = secrets.token_hex(10)
		new_session.save()
		response = JsonResponse({'created':'True', 'session_id': new_session.id}, status=201)
		# https://docs.djangoproject.com/en/5.1/ref/request-response/#django.http.HttpResponse.set_cookie
		response.set_cookie(key="SESSION_TOKEN", value=new_session.token, httponly=True)
		return response
	else:
		return JsonResponse({'error': 'Password is invalid'}, status=401)

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {//?ask Max: можете выкинуть ¾ своего кода, просто подключив несколько зависимостей?
        Schema::create('purchases', function (Blueprint $table) {
            $table->bigIncrements('id'); 
            //$table->unsignedBigInteger('purchaseable_id');//??
            //$table->string('purchseable_type');//??
            $table->morphs('purchaseable');//?for virtual fields analog?//1.noRevers:Придется, либо писать свои триггеры (процедуры или еще что) для самой СУБД, либо, что чаще делают, переложить работу по синхронизации строк и накладыванию ограничений между таблицами на ORM и язык программирования. noFrorin key. noConstrains. 2.в типе сущности. Необходимо как-то описать какой тип, какой таблице принадлежит. Это может быть не очевидно, если например название какой-то таблицы изменилось или если вы задали тип сущности цифрами. Решить эту проблему можно, например создав отдельную таблицу, или прописав в коде проекта, ассоциативный массив с сопоставлением типа и сущности.?а появятся ли завтра новые таблицы, новые сущности с одинаковым функционалом и требованиями, которые можно было бы вынести и сделать динамическими, и исходя от ответа проектировать свои БД?ПринадлежитнеЯвляется?
            $table->unsignedBigInteger('user_id')->nullable()->unsigned()->index();
            $table->unsignedBigInteger('order_id')->nullable()->unsigned()->index();
            $table->integer('qty')->nullable();
            //$table->integer('code')->nullable();
            $table->integer('status_bought')->default(0);//buy button click with new order_id
            $table->integer('status_paid')->default(0);//if admin saw money an acount          
            $table->integer('created_by')->nullable();           
            $table->timestamps();
        });

        Schema::table('purchases', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');//ограничения (constraints) на изменение или удаление записей??S
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}

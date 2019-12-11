import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: Scaffold(
        body: Center(
          child: Card(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                const ListTile(
                  leading: Icon(Icons.attach_money),
                  title: Text('Saldo em Conta'),
                  subtitle: Text('1850'),
                )
              ],
            ),
          ),
        ),
        appBar: AppBar(
          backgroundColor: Colors.lightGreen[900],
          title: const Text(
            'Transferências',
          ),
        ),
        floatingActionButton: FloatingActionButton(
          child: Icon(
            Icons.add,
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    ));

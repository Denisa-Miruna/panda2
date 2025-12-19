
module panda::game {
  use sui::balance::Balance;
  use sui::tx_context::TxContext;
  struct GAME has store, drop {}
  struct Player has key { id: UID, clicks: u64, balance: Balance<GAME> }
  public fun init(ctx:&mut TxContext){
    let p=Player{ id: object::new(ctx), clicks:0, balance: balance::zero<GAME>() };
    transfer::share_object(p);
  }
  public fun click(p:&mut Player){
    p.clicks=p.clicks+1;
    balance::join(&mut p.balance, balance::from_value<GAME>(1));
  }
}

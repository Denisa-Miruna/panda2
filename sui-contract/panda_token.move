module panda::token {
    use sui::tx_context::TxContext;
    use sui::object::UID;
    use sui::transfer;

    struct PandaToken has store, key {
        id: UID,
        value: u64,
    }

    public fun init(ctx: &mut TxContext) {
        let token = PandaToken { id: object::new(ctx), value: 0 };
        transfer::share_object(token);
    }

    public fun mint(token: &mut PandaToken, amount: u64) {
        token.value = token.value + amount;
    }

    public fun spend(token: &mut PandaToken, amount: u64) {
        assert!(token.value >= amount, 0);
        token.value = token.value - amount;
    }

    public fun get_balance(token: &PandaToken): u64 {
        token.value
    }
}

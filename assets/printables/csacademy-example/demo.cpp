// Educational preparation example, AI-assisted; not a contest submission.
#include <iostream>
using namespace std;

long long gcd_nonnegative(long long a, long long b) {
    while (b != 0) {
        long long r = a % b;
        a = b;
        b = r;
    }
    return a;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    long long a, b;
    if (!(cin >> a >> b) || a < 0 || b < 0) return 1;
    cout << gcd_nonnegative(a, b) << '\n';
}

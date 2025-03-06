### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [15](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1007.0<br />
<br />
Final Rank Value (1007.0) = Starting Rank Value (1004.4) + Head To Head Adjustments (2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.656[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.231<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1004.4
- 400 + ( ( 0.231 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1004.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       82 | 2025-02-23 | BC.Game Esports    | W   | 0.118      | 0.435        | 0.121 (0.006)    | 1.000 (0.051)    | 0 (0.000) |     1.46 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |      100 | 2025-02-23 | 9Pandas            | W   | 0.116      | 0.435        | 0.060 (0.003)    | 0.310 (0.016)    | 0 (0.000) |     1.02 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |      114 | 2025-02-22 | CYBERSHOKE Esports | W   | 0.111      | 0.435        | 0.024 (0.001)    | 1.000 (0.048)    | 0 (0.000) |     0.89 | alex666, esenthial, headtr1ck, kensizor, npl |
|            6 |      155 | 2025-02-20 | Monte              | W   | 0.098      | 0.435        | 0.000 (0.000)    | 0.230 (0.010)    | 0 (0.000) |     0.22 | alex666, esenthial, headtr1ck, kensizor, npl |
|            5 |      247 | 2025-02-15 | 500                | L   | 0.063      | -            | -                | -                | -         |    -1.19 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |      269 | 2025-02-14 | Nemiga Gaming      | W   | 0.058      | 0.435        | 0.013 (0.000)    | 0.121 (0.003)    | 0 (0.000) |     0.20 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |      314 | 2025-02-12 | GUN5 Esports       | W   | 0.044      | 0.435        | 0.024 (0.000)    | 0.157 (0.003)    | 0 (0.000) |     0.30 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |      505 | 2025-02-07 | PARIVISION         | L   | 0.009      | -            | -                | -                | -         |    -0.28 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |      516 | 2025-02-06 | Alliance           | W   | 0.005      | 0.435        | 0.000 (0.000)    | 0.773 (0.002)    | 0 (0.000) |     0.01 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,925.19)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $22,000.00     | $2,599.26       |
| 2025-02-15 |      0.065 | $5,000.00      | $325.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, skullz, yuurih<br />
Global Rank: [22](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [6]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  974.3<br />
<br />
Final Rank Value (974.3) = Starting Rank Value (971.8) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.423[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 971.8
- 400 + ( ( 0.232 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 971.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      590 | 2025-02-03 | Astralis        | L   | 0.171      | -            | -                | -                | -         |    -0.02 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            5 |      611 | 2025-02-01 | Natus Vincere   | L   | 0.158      | -            | -                | -                | -         |    -0.44 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            4 |      624 | 2025-01-31 | Wildcard        | W   | 0.150      | 1.000        | 0.145 (0.022)    | 0.171 (0.026)    | 1 (0.150) |     3.27 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            3 |      636 | 2025-01-29 | Imperial Female | W   | 0.138      | 1.000        | 0.088 (0.012)    | 0.000 (0.000)    | 1 (0.138) |     0.78 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            2 |      670 | 2025-01-19 | BetBoom Team    | L   | 0.070      | -            | -                | -                | -         |    -1.47 | chelo, FalleN, KSCERATO, skullz, yuurih |
|            1 |      678 | 2025-01-17 | Nemiga Gaming   | W   | 0.057      | 0.363        | 0.010 (0.000)    | 0.251 (0.005)    | 0 (0.000) |     0.39 | chelo, FalleN, KSCERATO, skullz, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,111.11)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.211 | $10,000.00     | $2,111.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

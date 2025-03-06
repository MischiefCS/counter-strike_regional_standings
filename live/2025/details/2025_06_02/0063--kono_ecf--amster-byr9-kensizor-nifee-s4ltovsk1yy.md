### Roster Details<br />
Team Name: KONO.ECF<br />
Roster: amster, byr9, kensizor, nifee, s4ltovsk1yy<br />
Global Rank: [63](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [42]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  718.9<br />
<br />
Final Rank Value (718.9) = Starting Rank Value (712.9) + Head To Head Adjustments (5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.9
- 400 + ( ( 0.135 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 712.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      756 | 2024-12-25 | WOPA Esport        | W   | 0.137      | 0.333        | 0.009 (0.000)    | 0.205 (0.009)    | 0 (0.000) |     2.19 | amster, byr9, kensizor, nifee, s4ltovsk1yy |
|            7 |      761 | 2024-12-23 | ENCE Academy       | W   | 0.122      | 0.333        | 0.008 (0.000)    | 0.129 (0.005)    | 0 (0.000) |     2.44 | amster, byr9, kensizor, nifee, s4ltovsk1yy |
|            6 |      767 | 2024-12-22 | TEAM NEXT LEVEL    | W   | 0.118      | 0.143        | 0.005 (0.000)    | 0.020 (0.000)    | 0 (0.000) |     1.61 | amster, byr9, kensizor, nifee, s4ltovsk1yy |
|            5 |      783 | 2024-12-21 | ADEPTS             | W   | 0.110      | 0.333        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     0.82 | amster, byr9, kensizor, nifee, s4ltovsk1yy |
|            4 |      785 | 2024-12-21 | WOPA Esport        | L   | 0.109      | -            | -                | -                | -         |    -1.73 | amster, byr9, kensizor, nifee, s4ltovsk1yy |
|            3 |      802 | 2024-12-19 | Astralis Talent    | W   | 0.098      | 0.333        | 0.000 (0.000)    | 0.152 (0.005)    | 0 (0.000) |     0.78 | amster, byr9, kensizor, nifee, s4ltovsk1yy |
|            2 |      808 | 2024-12-19 | Preasy Esport      | W   | 0.096      | 0.333        | 0.005 (0.000)    | 0.236 (0.008)    | 0 (0.000) |     1.37 | amster, byr9, kensizor, nifee, s4ltovsk1yy |
|            1 |      824 | 2024-12-17 | Dark Cloud Esports | L   | 0.085      | -            | -                | -                | -         |    -1.55 | amster, byr9, kensizor, nifee, s4ltovsk1yy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($960.56)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-25 |      0.137 | $6,000.00      | $819.58         |
| 2024-12-22 |      0.118 | $1,196.99      | $140.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

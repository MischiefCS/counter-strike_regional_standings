### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: JennyR, juliano, LETi, pauliiee, Zana<br />
Global Rank: [109](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  763.8<br />
<br />
Final Rank Value (763.8) = Starting Rank Value (758.1) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.126[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 758.1
- 400 + ( ( 0.188 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 758.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1265 | 2024-11-24 | Imperial Female      | L   | 0.551      | -            | -                | -                | -         |    -3.56 | JennyR, juliano, LETi, pauliiee, Zana |
|            9 |     1286 | 2024-11-23 | NIP Impact           | W   | 0.545      | 0.596        | 0.011 (0.004)    | 0.060 (0.019)    | 1 (0.545) |     7.01 | JennyR, juliano, LETi, pauliiee, Zana |
|            8 |     1305 | 2024-11-22 | FURIA Esports Female | L   | 0.540      | -            | -                | -                | -         |    -3.59 | JennyR, juliano, LETi, pauliiee, Zana |
|            7 |     1314 | 2024-11-22 | NIP Impact           | W   | 0.538      | 0.596        | 0.011 (0.004)    | 0.060 (0.019)    | 1 (0.538) |     6.98 | JennyR, juliano, LETi, pauliiee, Zana |
|            6 |     1863 | 2024-10-19 | Let Her Cook         | W   | 0.312      | 0.546        | 0.002 (0.000)    | 0.031 (0.005)    | 0 (0.000) |     3.29 | JennyR, juliano, LETi, pauliiee, Zana |
|            5 |     1885 | 2024-10-18 | HSG                  | L   | 0.306      | -            | -                | -                | -         |    -6.44 | JennyR, juliano, LETi, pauliiee, Zana |
|            4 |     2241 | 2024-10-03 | K27 Female           | W   | 0.206      | 0.546        | 0.007 (0.001)    | 0.052 (0.006)    | 0 (0.000) |     2.44 | JennyR, juliano, LETi, pauliiee, Zana |
|            3 |     2540 | 2024-09-25 | Permitta W           | W   | 0.153      | 0.546        | 0.003 (0.000)    | 0.042 (0.003)    | 0 (0.000) |     1.53 | JennyR, juliano, LETi, pauliiee, Zana |
|            2 |     2894 | 2024-09-14 | K27 Female           | L   | 0.078      | -            | -                | -                | -         |    -1.54 | JennyR, juliano, LETi, pauliiee, Zana |
|            1 |     2975 | 2024-09-11 | Imperial Female      | L   | 0.060      | -            | -                | -                | -         |    -0.39 | JennyR, juliano, LETi, pauliiee, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,184.31)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $13,000.00     | $7,184.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

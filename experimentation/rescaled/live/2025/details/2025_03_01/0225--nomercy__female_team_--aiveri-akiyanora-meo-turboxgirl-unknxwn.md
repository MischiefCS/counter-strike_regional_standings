### Roster Details<br />
Team Name: Nomercy (Female team)<br />
Roster: aiveri, akiyanora, meo, turboxgirl, unknxwn<br />
Global Rank: [225](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [133]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  602.0<br />
<br />
Final Rank Value (602.0) = Starting Rank Value (604.6) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.6
- 400 + ( ( 0.108 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 604.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      540 | 2025-02-05 | Okfjong         | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.68 | aiveri, akiyanora, meo, turboxgirl, unknxwn |
|            5 |      849 | 2024-12-15 | Permitta W      | L   | 0.693      | -            | -                | -                | -         |   -10.30 | akiyanora, ayaka, Ellie, meo, unknxwn       |
|            4 |     1886 | 2024-10-18 | Imperial Female | L   | 0.306      | -            | -                | -                | -         |    -0.91 | akiyanora, amore, meo, Miley, unknxwn       |
|            3 |     2479 | 2024-09-26 | HSG             | W   | 0.160      | 0.384        | 0.002 (0.000)    | 0.032 (0.002)    | 0 (0.000) |     2.70 | akiyanora, amore, meo, Miley, unknxwn       |
|            2 |     2778 | 2024-09-18 | K27 Female      | L   | 0.106      | -            | -                | -                | -         |    -1.41 | akiyanora, amore, meo, Miley, unknxwn       |
|            1 |     3132 | 2024-09-05 | Permitta W      | L   | 0.020      | -            | -                | -                | -         |    -0.29 | akiyanora, amore, meo, Miley, unknxwn       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($508.69)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.693 | $250.00        | $173.13         |
| 2024-10-20 |      0.320 | $1,050.00      | $335.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

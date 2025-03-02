### Roster Details<br />
Team Name: MAFE MA3LOM<br />
Roster: hoveRR, HunT3Rr, REAL1ZE, sprantos, tr1<br />
Global Rank: [484](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [77]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  529.0<br />
<br />
Final Rank Value (529.0) = Starting Rank Value (539.2) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.2
- 400 + ( ( 0.067 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 539.2


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
|            7 |     2671 | 2024-11-23 | Onyx Ravens     | L   | 0.553      | -            | -                | -                | -         |    -5.23 | hoveRR, HunT3Rr, REAL1ZE, sprantos, tr1 |
|            6 |     2767 | 2024-11-22 | Al-Ittihad      | L   | 0.546      | -            | -                | -                | -         |    -4.81 | hoveRR, HunT3Rr, REAL1ZE, sprantos, tr1 |
|            5 |     3193 | 2024-11-15 | GTZ.ESPORTS     | L   | 0.499      | -            | -                | -                | -         |    -0.31 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            4 |     3204 | 2024-11-15 | Team Chile      | L   | 0.498      | -            | -                | -                | -         |    -7.31 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            3 |     3263 | 2024-11-14 | ALTERNATE aTTaX | L   | 0.492      | -            | -                | -                | -         |    -1.48 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            2 |     3269 | 2024-11-14 | Team Hungary    | L   | 0.491      | -            | -                | -                | -         |    -2.63 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            1 |     3276 | 2024-11-14 | The Suspect     | W   | 0.491      | 0.617        | 0.003 (0.001)    | 0.242 (0.073)    | 1 (0.491) |    11.60 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

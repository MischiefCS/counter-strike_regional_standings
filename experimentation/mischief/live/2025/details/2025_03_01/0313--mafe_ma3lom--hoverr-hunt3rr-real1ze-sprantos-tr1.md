### Roster Details<br />
Team Name: MAFE MA3LOM<br />
Roster: hoveRR, HunT3Rr, REAL1ZE, sprantos, tr1<br />
Global Rank: [313](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [56]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  511.3<br />
<br />
Final Rank Value (511.3) = Starting Rank Value (523.7) + Head To Head Adjustments (-12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.7
- 400 + ( ( 0.063 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 523.7


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
|            7 |     2382 | 2024-11-23 | Onyx Ravens     | L   | 0.546      | -            | -                | -                | -         |    -4.83 | hoveRR, HunT3Rr, REAL1ZE, sprantos, tr1 |
|            6 |     2442 | 2024-11-22 | Al-Ittihad      | L   | 0.540      | -            | -                | -                | -         |    -5.57 | hoveRR, HunT3Rr, REAL1ZE, sprantos, tr1 |
|            5 |     2677 | 2024-11-15 | GTZ.ESPORTS     | L   | 0.493      | -            | -                | -                | -         |    -0.59 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            4 |     2686 | 2024-11-15 | Team Chile      | L   | 0.492      | -            | -                | -                | -         |    -7.30 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            3 |     2727 | 2024-11-14 | ALTERNATE aTTaX | L   | 0.486      | -            | -                | -                | -         |    -1.87 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            2 |     2732 | 2024-11-14 | Team Hungary    | L   | 0.485      | -            | -                | -                | -         |    -3.07 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |
|            1 |     2737 | 2024-11-14 | The Suspect     | W   | 0.485      | 0.617        | 0.002 (0.001)    | 0.099 (0.030)    | 1 (0.485) |    10.78 | BOROS, HuNt3R, REAL1ZE, sprantos, tr1   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
